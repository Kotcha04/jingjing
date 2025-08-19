package entity

import "gorm.io/gorm"

type Company struct {
	gorm.Model
	Company string

	// 1 Company can have many Prices
	Prices []Price `gorm:"foreignKey:CompanyID"`
}
