package entity

import "gorm.io/gorm"

type Repair struct {
	gorm.Model
	Repair string

	// 1 Repair can have many Prices
	Prices []Price `gorm:"foreignKey:RepairID"`
}
