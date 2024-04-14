package main

import (
	"context"
	"log"

	"shadow/internal/templates"

	"github.com/gofiber/fiber/v3"
)

func main() {
	app := fiber.New()

	app.Get("/", func(c fiber.Ctx) error {
		c.Set("Content-Type", "text/html")
		return templates.Layout(templates.Index(), "Index").Render(context.Background(), c.Response().BodyWriter())
	}).Name("Home")

	app.Get("/about", func(c fiber.Ctx) error {
		c.Set("Content-Type", "text/html")
		return templates.Layout(templates.About(), "About").Render(context.Background(), c.Response().BodyWriter())
	}).Name("About")

	app.Get("/api", func(c fiber.Ctx) error {
		// Return html
		c.Set("Content-Type", "text/html")
		return templates.Api().Render(context.Background(), c.Response().BodyWriter())
	}).Name("API")

	app.Static("/static", "./static")

	log.Fatal(app.Listen(":3000"))
}
