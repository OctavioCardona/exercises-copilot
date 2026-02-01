package com.example.servicioinventario.service.impl;

import com.example.servicioinventario.dto.ProductDTO;
import com.example.servicioinventario.model.Product;
import com.example.servicioinventario.repository.ProductRepository;
import com.example.servicioinventario.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public String createProduct(ProductDTO productDTO) {
        Product product = new Product();
        product.setName(productDTO.getName());
        product.setQuantity(productDTO.getQuantity());
        product.setPrice(productDTO.getPrice());
        productRepository.save(product);
        return "Producto creado exitosamente";
    }

    @Override
    public ProductDTO getProductById(Long id) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            Product p = product.get();
            return new ProductDTO(p.getId(), p.getName(), p.getQuantity(), p.getPrice());
        }
        throw new RuntimeException("Producto no encontrado con ID: " + id);
    }

    @Override
    public String updateProduct(Long id, ProductDTO productDTO) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            Product p = product.get();
            p.setName(productDTO.getName());
            p.setQuantity(productDTO.getQuantity());
            p.setPrice(productDTO.getPrice());
            productRepository.save(p);
            return "Producto actualizado exitosamente";
        }
        throw new RuntimeException("Producto no encontrado con ID: " + id);
    }

    @Override
    public void deleteProduct(Long id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
        } else {
            throw new RuntimeException("Producto no encontrado con ID: " + id);
        }
    }
}