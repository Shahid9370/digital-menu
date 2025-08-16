const mockCategories = ['Starters', 'Mains', 'Desserts'];

export const getCategories = async () => {
  console.log('Returning mockCategories:', mockCategories);
  return mockCategories;
};