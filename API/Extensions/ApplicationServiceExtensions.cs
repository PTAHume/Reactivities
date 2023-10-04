using Application.Activities;
using Application.Core;
using Application.Interfaces;
using FluentValidation;
using FluentValidation.AspNetCore;
using Infrastructure.Photos;
using Infrastructure.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions;

public static class ApplicationServiceExtensions
{
	public static IServiceCollection AddApplicationServices
		(this IServiceCollection services, IConfiguration config)
	{
		services.AddControllers(opt =>
		{
			var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
			opt.Filters.Add(new AuthorizeFilter(policy));
		});
		services.AddEndpointsApiExplorer();
		services.AddSwaggerGen();
		services.AddDbContext<DataContext>(opt =>
		{
			opt.UseNpgsql(config.GetConnectionString("DefaultConnection"));
		});
		services.AddCors(opt =>
		{
			opt.AddPolicy("CorsPolicy", policy =>
			{
				policy
				.AllowAnyMethod()
				.AllowAnyHeader()
				.AllowCredentials()
				.WithOrigins("http://localhost:3000");
			});
		});
		services.AddFluentValidationAutoValidation(); ;
		services.AddValidatorsFromAssemblyContaining<Create>();
		services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(typeof(List.Handler).Assembly));
		services.AddAutoMapper(typeof(MappingProfiles).Assembly);
		services.AddHttpContextAccessor();
		services.AddScoped<IUserAccessor, UserAccessor>();
		services.AddScoped<IPhotoAccessor, PhotoAccessor>();
		services.Configure<CloudinarySettings>(config.GetSection("Cloudinary"));
		services.AddSignalR();

		return services;
	}
}
