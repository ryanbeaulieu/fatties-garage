interface ProductCardProps {
    product: any
}

export const ProductCard = ({ product }: ProductCardProps) => {
    console.log(product);
    return <p>Product Card</p>
}