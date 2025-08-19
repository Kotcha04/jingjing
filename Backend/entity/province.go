package entity

import "gorm.io/gorm"

type Province struct {
	gorm.Model
	Province string

	// 1 Province can have many Cars
	Cars []Car `gorm:"foreignKey:ProvinceID"`
}
