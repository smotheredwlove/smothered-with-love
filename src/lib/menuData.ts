export type MenuCategory = "Soul" | "Seafood" | "Healthy" | "Vegan";

export type MenuSection =
  | "Holiday 2025"
  | "Charcuterie"
  | "Hors d’oeuvre"
  | "Entree"
  | "Pasta"
  | "Sides"
  | "Salads"
  | "Brunch"
  | "Dessert"
  | "Drinks"
  | "Mini Masters"
  | "International Smorgasbord";

export type MenuItem = {
  
    name: string;
  category: MenuCategory;
  section: MenuSection;
  description?: string;
  tags?: string[];
  porkByRequest?: boolean;
  image?: string; // add later like "/menu/smothered-turkey-wings.jpg"
};

export const menuItems: MenuItem[] = [
  // ----------------------------
  // HOLIDAY MENU 2025
  // ----------------------------
  { name: "Smothered Turkey Wings", category: "Soul", section: "Holiday 2025" },
  { name: "Jerk Turkey Wing", category: "Soul", section: "Holiday 2025" },
  { name: "Broiled Glazed Salmon", category: "Seafood", section: "Holiday 2025" },
  { name: "Baked Chicken", category: "Soul", section: "Holiday 2025" },
  { name: "Smothered Chicken", category: "Soul", section: "Holiday 2025" },
  { name: "Meatloaf", category: "Soul", section: "Holiday 2025" },
  { name: "Smothered Black Bean Loaf (V)", category: "Vegan", section: "Holiday 2025", tags: ["Vegan"] },

  { name: "White Rice", category: "Healthy", section: "Holiday 2025" },
  { name: "Yellow Rice", category: "Healthy", section: "Holiday 2025" },
  { name: "Homemade Mashed Potatoes", category: "Soul", section: "Holiday 2025" },
  { name: "Cornbread Stuffing", category: "Soul", section: "Holiday 2025" },
  { name: "Mac and Cheese", category: "Soul", section: "Holiday 2025" },
  { name: "Cabbage", category: "Healthy", section: "Holiday 2025" },
  { name: "Collard Greens", category: "Healthy", section: "Holiday 2025" },
  { name: "Gumbo Collards", category: "Healthy", section: "Holiday 2025" },
  { name: "String Beans", category: "Healthy", section: "Holiday 2025" },
  { name: "Candied Yams", category: "Soul", section: "Holiday 2025" },
  { name: "Corn Pudding", category: "Soul", section: "Holiday 2025" },
  { name: "Okra Corn & Tomato", category: "Healthy", section: "Holiday 2025" },

  { name: "Potato Salad", category: "Soul", section: "Holiday 2025" },
  { name: "Seafood Salad", category: "Seafood", section: "Holiday 2025" },
  { name: "Pasta Salad", category: "Healthy", section: "Holiday 2025" },
  { name: "Macaroni Salad", category: "Soul", section: "Holiday 2025" },
  { name: "Cornbread", category: "Soul", section: "Holiday 2025" },

  { name: "Rice Pudding", category: "Soul", section: "Holiday 2025", tags: ["Dessert"] },
  { name: "Tomato Pudding", category: "Soul", section: "Holiday 2025", tags: ["Dessert"] },

  // ----------------------------
  // CHARCUTERIE / HORS D’OEUVRE
  // ----------------------------
  { name: "Charcuterie Boards", category: "Soul", section: "Charcuterie" },

  { name: "Stuffed Mushrooms", category: "Healthy", section: "Hors d’oeuvre" },
  { name: "Shrimp Cocktail", category: "Seafood", section: "Hors d’oeuvre" },
  { name: "Teriyaki Meatballs & Cheese on a Stick", category: "Soul", section: "Hors d’oeuvre" },
  { name: "Lox, Cream Cheese, Capers Bagel Bites", category: "Seafood", section: "Hors d’oeuvre" },
  { name: "Mozzarella Bites", category: "Soul", section: "Hors d’oeuvre" },
  { name: "Chicken Bites", category: "Soul", section: "Hors d’oeuvre" },
  { name: "Mini Chicken & Waffles", category: "Soul", section: "Hors d’oeuvre" },
  { name: "Deviled Eggs", category: "Soul", section: "Hors d’oeuvre" },
  { name: "Shrimp Deviled Eggs", category: "Seafood", section: "Hors d’oeuvre" },
  { name: "Salmon Bites", category: "Seafood", section: "Hors d’oeuvre" },
  { name: "BBQ Chicken Slider", category: "Soul", section: "Hors d’oeuvre" },
  { name: "Korean BBQ Wings", category: "Soul", section: "Hors d’oeuvre" },
  { name: "Buffalo Wings", category: "Soul", section: "Hors d’oeuvre" },
  { name: "Honey Jerk Wings", category: "Soul", section: "Hors d’oeuvre" },
  { name: "Stuffed Jalapeño Peppers", category: "Healthy", section: "Hors d’oeuvre" },
  { name: "Mac & Cheese Bites", category: "Soul", section: "Hors d’oeuvre" },

  // ----------------------------
  // ENTREES (Main Menu)
  // ----------------------------
  { name: "Chicken Breast", category: "Healthy", section: "Entree" },
  { name: "Curry Chicken", category: "Soul", section: "Entree" },
  { name: "Jerk Chicken", category: "Soul", section: "Entree" },
  { name: "Turkey Wings", category: "Soul", section: "Entree" },
  { name: "Brown Stew Chicken", category: "Soul", section: "Entree" },
  { name: "Roast Beef", category: "Soul", section: "Entree" },
  { name: "Oxtails", category: "Soul", section: "Entree" },
  { name: "Baked Cod", category: "Seafood", section: "Entree" },
  { name: "Salmon", category: "Seafood", section: "Entree" },
  { name: "Ahi Tuna", category: "Seafood", section: "Entree" },

  // ----------------------------
  // PASTA
  // ----------------------------
  { name: "Alfredo (Plain)", category: "Soul", section: "Pasta" },
  { name: "Alfredo (Chicken)", category: "Soul", section: "Pasta" },
  { name: "Alfredo (Shrimp)", category: "Seafood", section: "Pasta" },
  { name: "Alfredo (Salmon)", category: "Seafood", section: "Pasta" },
  { name: "Alfredo (Seafood)", category: "Seafood", section: "Pasta" },

  { name: "Baked Ziti (Plain)", category: "Soul", section: "Pasta" },
  { name: "Baked Ziti (Beef)", category: "Soul", section: "Pasta" },
  { name: "Baked Ziti (Turkey)", category: "Soul", section: "Pasta" },
  { name: "Baked Ziti (Seafood)", category: "Seafood", section: "Pasta" },

  { name: "Creamy Garlic Pasta", category: "Soul", section: "Pasta" },
  { name: "Ziti", category: "Soul", section: "Pasta" },
  { name: "Chicken Parmesan Pasta", category: "Soul", section: "Pasta" },

  // ----------------------------
  // SIDES
  // ----------------------------
  { name: "White Rice", category: "Healthy", section: "Sides" },
  { name: "Fried Rice", category: "Soul", section: "Sides" },
  { name: "Spanish Rice", category: "Soul", section: "Sides" },
  { name: "Rice Pilaf", category: "Healthy", section: "Sides" },
  { name: "Mashed Potatoes", category: "Soul", section: "Sides" },
  { name: "Garlic Mashed Potatoes", category: "Soul", section: "Sides" },
  { name: "Roasted Potatoes", category: "Healthy", section: "Sides" },
  { name: "Candied Yams", category: "Soul", section: "Sides" },
  { name: "Collard Greens", category: "Healthy", section: "Sides" },
  { name: "Kale Greens", category: "Healthy", section: "Sides" },
  { name: "Spinach", category: "Healthy", section: "Sides" },
  { name: "Cabbage", category: "Healthy", section: "Sides" },
  { name: "Broccoli", category: "Healthy", section: "Sides" },
  { name: "Fried Corn", category: "Soul", section: "Sides" },

  { name: "Potato Salad", category: "Soul", section: "Sides" },
  { name: "Seafood Salad", category: "Seafood", section: "Sides" },
  { name: "Macaroni Salad", category: "Soul", section: "Sides" },
  { name: "Pasta Salad", category: "Healthy", section: "Sides" },
  { name: "Shrimp Pasta", category: "Seafood", section: "Sides" },

  // ----------------------------
  // SALADS
  // ----------------------------
  { name: "Garden Salad", category: "Healthy", section: "Salads" },
  { name: "Caesar Salad", category: "Healthy", section: "Salads" },
  { name: "Kale Salad", category: "Healthy", section: "Salads" },
  { name: "Arugula Salad", category: "Healthy", section: "Salads" },

  // ----------------------------
  // BRUNCH / BARS
  // ----------------------------
  { name: "Fish & Grits", category: "Seafood", section: "Brunch" },
  { name: "Shrimp & Grits", category: "Seafood", section: "Brunch" },
  { name: "Chicken & Waffles", category: "Soul", section: "Brunch" },
  { name: "Fresh Fruit", category: "Healthy", section: "Brunch" },
  { name: "Eggs", category: "Healthy", section: "Brunch" },
  { name: "Turkey Bacon", category: "Healthy", section: "Brunch" },
  { name: "Turkey Sausage", category: "Healthy", section: "Brunch" },
  { name: "Sautéed Vegetables & Spaghetti", category: "Healthy", section: "Brunch" },

  { name: "Pasta Bar", category: "Soul", section: "Brunch", tags: ["Bar"] },
  { name: "Taco Bar", category: "Soul", section: "Brunch", tags: ["Bar"] },

  // ----------------------------
  // DESSERTS
  // ----------------------------
  { name: "Pound Cake", category: "Soul", section: "Dessert" },
  { name: "Lemon Pound Cake", category: "Soul", section: "Dessert" },
  { name: "Chocolate Cake", category: "Soul", section: "Dessert" },
  { name: "Lemon Cake", category: "Soul", section: "Dessert" },

  // ----------------------------
  // BUFFET / PRICING MENU ITEMS (Listed in PDF)
  // ----------------------------
  { name: "Hot Wings", category: "Soul", section: "Entree" },
  { name: "Garlic Parmesan Wings", category: "Soul", section: "Entree" },
  { name: "Swedish Meatballs", category: "Soul", section: "Entree" },
  { name: "Teriyaki Meatballs", category: "Soul", section: "Entree" },
  { name: "Pinchos (Chicken)", category: "Soul", section: "Hors d’oeuvre" },
  { name: "Pinchos (Vegetable)", category: "Healthy", section: "Hors d’oeuvre" },
  { name: "Pinchos (Shrimp)", category: "Seafood", section: "Hors d’oeuvre" },
  { name: "Roast Beef & Gravy", category: "Soul", section: "Entree" },
  { name: "Turkey & Gravy", category: "Soul", section: "Entree" },
  { name: "Salmon Cakes", category: "Seafood", section: "Entree" },
  { name: "Fish Cakes", category: "Seafood", section: "Entree" },
  { name: "Baked Fish", category: "Seafood", section: "Entree" },
  { name: "Chili", category: "Soul", section: "Entree" },

  // Appetizers list
  { name: "Stuffed Peppers", category: "Healthy", section: "Hors d’oeuvre" },
  { name: "Bacon Wrapped Jalapeño Poppers", category: "Soul", section: "Hors d’oeuvre", porkByRequest: true, tags: ["Pork by request"] },
  { name: "Tacos", category: "Soul", section: "Hors d’oeuvre" },
  { name: "Nacho Casserole", category: "Soul", section: "Hors d’oeuvre" },
  { name: "Chicken Quesadillas", category: "Soul", section: "Hors d’oeuvre" },
  { name: "Veggie Quesadillas", category: "Healthy", section: "Hors d’oeuvre" },

  // ----------------------------
  // MINI MASTERS / INTERNATIONAL / DRINKS
  // ----------------------------
  { name: "International Smorgasbord (Deli Meats: Turkey/Pork/Beef)", category: "Soul", section: "International Smorgasbord", porkByRequest: true },
  { name: "International Smorgasbord (Cheeses)", category: "Healthy", section: "International Smorgasbord" },
  { name: "International Smorgasbord (Veggies & Fruit)", category: "Healthy", section: "International Smorgasbord" },

  { name: "Spritzer Water", category: "Healthy", section: "Drinks" },
  { name: "Passion Punch", category: "Healthy", section: "Drinks" },
];
