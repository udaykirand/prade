package com.prade.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "PRODUCTS")
public class Product extends DeletableModel {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "description")
	private String description;

	@Column(name = "type")
	private String type;
	
	@Column(name = "image")
	private String image;

	@Column(name = "status")
	private String status;

	@Column(name = "sku")
	private String sku;

	@Column(name = "size")
	private String size;

	@Column(name = "height")
	private String height;

	@Column(name = "metal_type")
	private String metalType;

	@Column(name = "gem")
	private Boolean gem;

	@Column(name = "weight")
	private String weight;

	@Column(name = "quantity")
	private Integer quantity;

	@Column(name = "sold_out")
	private Boolean soldOut;

	@Column(name = "to_restock")
	private Boolean toRestock;

	private Double sellingPrice;

	private Double actualPrice;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getHeight() {
		return height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public String getMetalType() {
		return metalType;
	}

	public void setMetalType(String metalType) {
		this.metalType = metalType;
	}

	public Boolean getGem() {
		return gem;
	}

	public void setGem(Boolean gem) {
		this.gem = gem;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Boolean getSoldOut() {
		return soldOut;
	}

	public void setSoldOut(Boolean soldOut) {
		this.soldOut = soldOut;
	}

	public Boolean getToRestock() {
		return toRestock;
	}

	public void setToRestock(Boolean toRestock) {
		this.toRestock = toRestock;
	}
	
	public Double getSellingPrice() {
		return sellingPrice;
	}

	public void setSellingPrice(Double sellingPrice) {
		this.sellingPrice = sellingPrice;
	}

	public Double getActualPrice() {
		return actualPrice;
	}

	public void setActualPrice(Double actualPrice) {
		this.actualPrice = actualPrice;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
}
