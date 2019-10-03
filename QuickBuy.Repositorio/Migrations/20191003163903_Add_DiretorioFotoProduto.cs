using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuy.Repositorio.Migrations
{
    public partial class Add_DiretorioFotoProduto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DiretorioImagem",
                table: "Produtos",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DiretorioImagem",
                table: "Produtos");
        }
    }
}
