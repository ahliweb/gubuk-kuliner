export interface NutritionInfo {
  menuId: string;
  portion: {
    ingredient: string;
    weight: string;
  }[];
  values: {
    energy: string;
    protein: string;
    fat: string;
    carbohydrate: string;
    fiber: string;
  };
  disclaimer: string;
  dataSource: string;
}

export const nutritionData: NutritionInfo[] = [
  {
    menuId: "telur-dadar",
    portion: [
      { ingredient: "Nasi putih matang", weight: "150 g" },
      { ingredient: "Telur dadar", weight: "80 g" },
      { ingredient: "Sambal cumi/teri", weight: "25 g" },
      { ingredient: "Lalapan (timun)", weight: "30 g" },
      { ingredient: "Kerupuk", weight: "10 g" }
    ],
    values: {
      energy: "~610 kkal",
      protein: "~23 g",
      fat: "~23 g",
      carbohydrate: "~79 g",
      fiber: "~1 g"
    },
    disclaimer: "Estimasi nilai gizi dapat berubah sesuai porsi, resep, minyak, dan tambahan sambal/kerupuk. Untuk klaim resmi, perlu analisis laboratorium atau perhitungan gizi yang tervalidasi.",
    dataSource: "Sumber acuan: Tabel Komposisi Pangan Indonesia (TKPI) / Data Komposisi Pangan Indonesia"
  },
  {
    menuId: "tahu-tek",
    portion: [
      { ingredient: "Tahu goreng", weight: "100 g" },
      { ingredient: "Telur dadar", weight: "60 g" },
      { ingredient: "Lontong/ketupat", weight: "120 g" },
      { ingredient: "Tauge segar", weight: "40 g" },
      { ingredient: "Bumbu kacang petis", weight: "50 g" },
      { ingredient: "Timun", weight: "40 g" },
      { ingredient: "Kerupuk", weight: "15 g" }
    ],
    values: {
      energy: "~590 kkal",
      protein: "~26 g",
      fat: "~28 g",
      carbohydrate: "~64 g",
      fiber: "~5 g"
    },
    disclaimer: "Estimasi nilai gizi dapat berubah sesuai porsi, resep, minyak, dan tambahan sambal/kerupuk. Untuk klaim resmi, perlu analisis laboratorium atau perhitungan gizi yang tervalidasi.",
    dataSource: "Sumber acuan: Tabel Komposisi Pangan Indonesia (TKPI) / Data Komposisi Pangan Indonesia"
  }
];

export function getNutritionByMenuId(menuId: string): NutritionInfo | undefined {
  return nutritionData.find(item => item.menuId === menuId);
}
