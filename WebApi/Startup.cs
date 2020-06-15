using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using QuickBuy.Repositorio.Contexto;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Repositorio.Repositorios;
using Microsoft.EntityFrameworkCore;

namespace WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            //String de conexão do banco
            string connectionStrings = Configuration.GetConnectionString("PostgreSql");

            services.AddDbContext<QuickBuyContexto>(options =>
                                                        //Permite o carregamento automático das entidades relacionadas
                                                        options.UseLazyLoadingProxies()
                                                            .UseNpgsql(connectionStrings,
                                                                m => m.MigrationsAssembly("QuickBuy.Repositorio")));

            services.AddTransient<IUsuarioRepositorio, UsuarioRepositorio>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors(c =>
            {
                c.AllowAnyHeader();
                c.AllowAnyMethod();
                c.AllowAnyOrigin();
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
