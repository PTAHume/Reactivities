
using Microsoft.AspNetCore.Identity;

namespace Domain;

public class AppUser : IdentityUser
{
    public string DisplayName { get; set; }
    public string BIo { get; set; }
    public ICollection<ActivityAttendee> Activities { get; set; }
}