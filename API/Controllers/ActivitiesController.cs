
using System.Reflection.Metadata.Ecma335;
using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<Activity>>>
            GetActivities() => await Mediator.Send(new List.Query());

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>>
        Get(Guid id) => await Mediator.Send(new Details.Query { Id = id });

    [HttpPost]
    public async Task<IActionResult>
    CreateActivity(Activity activity) => Ok(await Mediator.Send(new Create.Command { Activity = activity }));

    [HttpPut("{id}")]
    public async Task<IActionResult>
    EditActivity(Guid id, Activity activity)
    {
        activity.Id = id;
        return Ok(await Mediator.Send(new Edit.Command { Activity = activity }));
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult>
    DeleteActivity(Guid id)
    {
        return Ok(await Mediator.Send(new Delete.Command { Id = id }));
    }
}

