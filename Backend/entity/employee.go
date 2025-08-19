package entity

import (
	"time"

	"gorm.io/gorm"
)

type Employee struct {
	gorm.Model
	FirstName       string
	LastName        string
	Position        string
	PhoneNumber     float64
	StartDate       time.Time
	Status          string
	TotalSales      float64

	// 1 Employee can have many Cars
	Cars []Car `gorm:"foreignKey:EmployeeID"`

	// 1 Employee can have many SalesContracts
	SalesContracts []SalesContract `gorm:"foreignKey:EmployeeID"`
}
