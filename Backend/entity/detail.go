package entity

import "gorm.io/gorm"

type Detail struct {
	gorm.Model
	Colour   string
	Age      int
	Mile     int

	// StatusID as foreign key
	StatusID *uint
	Status   Status `gorm:"foreignKey:StatusID"`

	// 1 Detail can have many Images
	Images []Image `gorm:"foreignKey:DetailID"`
}
