import { Grid } from "semantic-ui-react";
import { ActivityList } from "./ActivityList";
import { useStore } from "../../../app/api/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { ActivityFilters } from "./ActivityFilters";
import { lazily } from "react-lazily";
import { PagingParams } from "../../../app/modules/pagination.ts";
import InfiniteScroll from "react-infinite-scroller";

const { ActivityListItemPlaceholder } = lazily(
  () => import("./ActivityListItemPlaceHolder.tsx"),
);
const { Loader } = lazily(() => import("semantic-ui-react"));

export const ActivityDashboard = observer(() => {
  const { activityStore } = useStore();
  const {
    loadActivities,
    activityRegistry,
    loadingInitial,
    setPagingParams,
    pagination,
  } = activityStore;

  const [loadingNext, setLoadingNext] = useState(false);

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [loadActivities, activityRegistry]);

  const handleGetNextPage = () => {
    setLoadingNext(true);
    setPagingParams(new PagingParams(pagination!.currentPage + 1));
    loadActivities().then(() => {
      setLoadingNext(false);
    });
  };

  return (
    <Grid>
      <Grid.Column width="10">
        {loadingInitial && activityRegistry.size === 0 && !loadingNext ? (
          <>
            <ActivityListItemPlaceholder />
            <ActivityListItemPlaceholder />
          </>
        ) : (
          <InfiniteScroll
            pageStart={0}
            loadMore={handleGetNextPage}
            hasMore={
              !loadingNext &&
              !!pagination &&
              pagination?.currentPage < pagination?.totalPages
            }
            initialLoad={false}
          >
            <ActivityList />
          </InfiniteScroll>
        )}
      </Grid.Column>
      <Grid.Column width="6">
        <ActivityFilters />
      </Grid.Column>
      <Grid.Column width={10}>
        <Loader active={loadingNext} />
      </Grid.Column>
    </Grid>
  );
});
