﻿using System;
using System.Collections.Generic;
using System.Data.Objects;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OSIM.Core.Entities;

namespace OSIM.Core.Persistence
{
    public interface IUnitOfWork
    {
        IRepository<ItemType> ItemTypes { get; }
        void Commit();
    }
}
