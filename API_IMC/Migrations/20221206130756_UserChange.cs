using Microsoft.EntityFrameworkCore.Migrations;

namespace API_IMC.Migrations
{
    public partial class UserChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id",
                table: "Usuarios",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Usuarios",
                newName: "id");
        }
    }
}
