
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

	public class ActivitiesController : BaseApiController
	{
		private readonly DataContext _context;

		public ActivitiesController(DataContext context) => _context = context;

		[HttpGet]
		public async Task<ActionResult<IReadOnlyList<Activity>>>
			GetActivities() => await _context.Activities.ToListAsync();

		[HttpGet("{id}")]
		public async Task<ActionResult<Activity>> 
			Get(Guid id) => await _context.Activities.FindAsync( id);
	}

