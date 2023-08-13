<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Product;
use App\Models\Category;
use App\Models\Order;
use App\Models\Returns;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $userCount = User::count();
        $productCount = Product::count();
        $categoryCount = Category::count();
        $orderCount = Order::count();
        $returnCount = Returns::count();

        return response()->json([
            'status' => 200,
            'userCount' => $userCount,
            'productCount' => $productCount,
            'categoryCount' => $categoryCount,
            'orderCount' => $orderCount,
            'returnCount' => $returnCount,
        ]);
    }
}
