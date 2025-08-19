package entity

import "gorm.io/gorm"

type Type struct {
	gorm.Model
	Type string

	// 1 Type can have many Cars
	Cars []Car `gorm:"foreignKey:TypeID"`
}
