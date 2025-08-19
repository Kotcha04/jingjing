package entity

import "gorm.io/gorm"

type Plan struct {
	gorm.Model
	Plan string

	// 1 Plan can have many Prices
	Prices []Price `gorm:"foreignKey:PlanID"`
}