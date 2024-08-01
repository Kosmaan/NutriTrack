using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;

namespace Infrastructure.Handlers
{
    public class NullReferenceErrorHandler: IExceptionHandler
    {
        public async ValueTask<bool> TryHandleAsync(HttpContext httpContext, Exception exception, CancellationToken cancellationToken)
        {
            var x = exception.GetType();
            if (exception.GetType() == typeof(NullReferenceException))
            {
                await httpContext.Response.WriteAsync("You don't need to know why it was a null reference error");
                return true;
            }

            return false;
        }
    }
}
