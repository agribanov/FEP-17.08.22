import useProducts from './useProducts';

export default function useProductsList() {
    const { list } = useProducts();
    return list;
    // const { list: categories } = useCategories();

    // return list.map((item) => {
    //     console.log('getting list');
    //     const category = categories.find(
    //         (category) => category.id === item.categoryId
    //     );

    //     return {
    //         ...item,
    //         category: category ? category.title : 'unknown',
    //     };
    // });
}
