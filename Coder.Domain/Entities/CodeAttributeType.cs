using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Coder.Domain.Entities
{
    public class CodeAttributeType : MainBaseEntity
    {
        public int Id { get; set; }
        public string NameAr { get; set; }
        public string NameEn { get; set; }
        public string DescriptionAr { get; set; }
        public string DescriptionEn { get; set; }
        public bool IsActive { get; set; } = true;
        public string CreatedBy { get; set; }

        // Navigation properties
        public virtual ICollection<CodeAttributeMain> CodeAttributeMains { get; set; } = new List<CodeAttributeMain>();
    }
}
