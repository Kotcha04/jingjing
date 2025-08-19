package main

import (
	"github.com/Kotcha04/Ksa/entity"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	db, err := gorm.Open(sqlite.Open("car.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	db.AutoMigrate(&entity.Brand{}, &entity.Car{}, &entity.CarDetail{}, &entity.Company{}, &entity.Detail{}, &entity.Employee{}, 
		&entity.Image{}, &entity.Insurance{}, &entity.InsuranceStatus{}, &entity.Model{}, &entity.ModelDetail{}, &entity.Plan{}, 
		&entity.Price{}, &entity.PriceInsurance{}, &entity.Province{}, &entity.Repair{}, &entity.SalesContract{}, &entity.Status{}, &entity.Type{})
}