export interface ClientProduct {
    Id: number;
    CategoryId: number | null;
    CategoryName: string;
    UnitName: string;
    Name: string;
    LocalName: string;
    Code: string;
    ParentCode: string | null;
    ProductBarcode: string;
    Description: string;
    BrandName: string;
    SizeName: string;
    ColorName: string;
    ModelName: string | null;
    VariantName: string | null;
    OldPrice: number;
    Price: number;
    CostPrice: number;
    WarehouseList: any[]; // Replace 'any[]' with the actual type if known
    stock: number;
    TotalPurchase: number;
    LastPurchaseDate: string;
    LastPurchaseSupplier: string;
    TotalSales: number;
    LastSalesDate: string;
    LastSalesCustomer: string;
    ImagePath: string | null;
    Type: string;
    Status: string;
    CommissionAmount: number;
    CommissionPer: number;
    PCTN: number;
  }