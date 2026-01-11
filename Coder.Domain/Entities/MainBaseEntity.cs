using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Coder.Domain.Entities
{
    public class MainBaseEntity 
    {
        public DateTime? RegDate { get; set; }
        public int? RegUserID { get; set; }
        public int? RegComputerID { get; set; }
        public DateTime? CancelDate { get; set; }
        public int? CancelUserID { get; set; }
        public int? CancelComputerID { get; set; }

        // Soft Delete Fields
        public bool IsDeleted { get; set; } = false;
        public DateTime? DeletedAt { get; set; }
        public string? DeletedBy { get; set; }

        // Common Audit Timestamps
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

    }
}
