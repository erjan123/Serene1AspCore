using Serenity.Services;

namespace Serene1AspCore.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}