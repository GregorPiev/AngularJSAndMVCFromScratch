using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularJSAndMVCFromScratch.Startup))]
namespace AngularJSAndMVCFromScratch
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
