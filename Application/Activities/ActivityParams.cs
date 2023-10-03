using Application.Core;

public class ActivityParams : PagingPrams
{
    public bool IsGoing { get; set; }
    public bool IsHost { get; set; }
    public DateTime StartDate { get; set; } = DateTime.Now;
}
