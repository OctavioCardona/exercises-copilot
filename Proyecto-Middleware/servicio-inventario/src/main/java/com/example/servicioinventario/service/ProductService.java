package com.example.servicioinventario.service;

import com.example.servicioinventario.dto.ProductDTO;

public interface ProductService {
    String createProduct(ProductDTO productDTO);
    ProductDTO getProductById(Long id);
    String updateProduct(Long id, ProductDTO productDTO);
    void deleteProduct(Long id);
}