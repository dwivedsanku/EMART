using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EMart.AccountService.Entity
{
    public partial class EmartContext : DbContext
    {
        public EmartContext()
        {
        }

        public EmartContext(DbContextOptions<EmartContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Buyer> Buyer { get; set; }
        public virtual DbSet<Cart> Cart { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Discounts> Discounts { get; set; }
        public virtual DbSet<Items> Items { get; set; }
        public virtual DbSet<PurchaseHistory> PurchaseHistory { get; set; }
        public virtual DbSet<Seller> Seller { get; set; }
        public virtual DbSet<SubCategory> SubCategory { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=tcp:emartaccountservicedbserver.database.windows.net,1433;Initial Catalog=Emart;Persist Security Info=False;User ID=dbadmin;Password=Dbpass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Buyer>(entity =>
            {
                entity.HasKey(e => e.Bid)
                    .HasName("PK__Buyer__DE90ADE7847E9113");

                entity.Property(e => e.Bid)
                    .HasColumnName("bid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Datetime)
                    .HasColumnName("datetime")
                    .HasColumnType("date");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Mobileno)
                    .IsRequired()
                    .HasColumnName("mobileno")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Bid).HasColumnName("bid");

                entity.Property(e => e.Categoryid).HasColumnName("categoryid");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Imagename)
                    .HasColumnName("imagename")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Itemid).HasColumnName("itemid");

                entity.Property(e => e.Itemname)
                    .IsRequired()
                    .HasColumnName("itemname")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Price)
                    .IsRequired()
                    .HasColumnName("price")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Sid).HasColumnName("sid");

                entity.Property(e => e.Stockno).HasColumnName("stockno");

                entity.Property(e => e.Subcatergoryid).HasColumnName("subcatergoryid");

                entity.HasOne(d => d.B)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.Bid)
                    .HasConstraintName("FK__Cart__bid__74AE54BC");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.Categoryid)
                    .HasConstraintName("FK__Cart__categoryid__71D1E811");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.Itemid)
                    .HasConstraintName("FK__Cart__itemid__75A278F5");

                entity.HasOne(d => d.S)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.Sid)
                    .HasConstraintName("FK__Cart__sid__73BA3083");

                entity.HasOne(d => d.Subcatergory)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.Subcatergoryid)
                    .HasConstraintName("FK__Cart__subcatergo__72C60C4A");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(e => e.Cid)
                    .HasName("PK__Category__D837D05FA03127EA");

                entity.Property(e => e.Cid)
                    .HasColumnName("cid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Cdetails)
                    .HasColumnName("cdetails")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Cname)
                    .IsRequired()
                    .HasColumnName("cname")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Discounts>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Code)
                    .HasColumnName("code")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Edate)
                    .HasColumnName("edate")
                    .HasColumnType("date");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Percentage)
                    .HasColumnName("percentage")
                    .HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Sdate)
                    .HasColumnName("sdate")
                    .HasColumnType("date");
            });

            modelBuilder.Entity<Items>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Categoryid).HasColumnName("categoryid");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Itemname)
                    .IsRequired()
                    .HasColumnName("itemname")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Price)
                    .IsRequired()
                    .HasColumnName("price")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Sid).HasColumnName("sid");

                entity.Property(e => e.Stockno).HasColumnName("stockno");

                entity.Property(e => e.Subcatergoryid).HasColumnName("subcatergoryid");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.Categoryid)
                    .HasConstraintName("FK__Items__categoryi__66603565");

                entity.HasOne(d => d.S)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.Sid)
                    .HasConstraintName("FK__Items__sid__6EF57B66");

                entity.HasOne(d => d.Subcatergory)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.Subcatergoryid)
                    .HasConstraintName("FK__Items__subcaterg__6754599E");
            });

            modelBuilder.Entity<PurchaseHistory>(entity =>
            {
                entity.ToTable("Purchase_history");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Bid).HasColumnName("bid");

                entity.Property(e => e.Datetime)
                    .HasColumnName("datetime")
                    .HasColumnType("date");

                entity.Property(e => e.Itemid).HasColumnName("itemid");

                entity.Property(e => e.Noofitems).HasColumnName("noofitems");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Sid).HasColumnName("sid");

                entity.Property(e => e.Transactionstatus)
                    .HasColumnName("transactionstatus")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Transactiontype)
                    .IsRequired()
                    .HasColumnName("transactiontype")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.B)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Bid)
                    .HasConstraintName("FK__Purchase_hi__bid__6A30C649");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Itemid)
                    .HasConstraintName("FK__Purchase___itemi__6C190EBB");

                entity.HasOne(d => d.S)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Sid)
                    .HasConstraintName("FK__Purchase_hi__sid__6B24EA82");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.HasKey(e => e.Sid)
                    .HasName("PK__Seller__DDDFDD36EF9A0036");

                entity.Property(e => e.Sid)
                    .HasColumnName("sid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Aboutcmpy)
                    .HasColumnName("aboutcmpy")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasColumnName("address")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Companyname)
                    .IsRequired()
                    .HasColumnName("companyname")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Gst).HasColumnName("gst");

                entity.Property(e => e.Mobileno)
                    .IsRequired()
                    .HasColumnName("mobileno")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Website)
                    .HasColumnName("website")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SubCategory>(entity =>
            {
                entity.HasKey(e => e.Subid)
                    .HasName("PK__SubCateg__B0F1D5B37F2E76E2");

                entity.Property(e => e.Subid)
                    .HasColumnName("subid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Cid).HasColumnName("cid");

                entity.Property(e => e.Gst).HasColumnName("gst");

                entity.Property(e => e.Sdetails)
                    .HasColumnName("sdetails")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Subname)
                    .IsRequired()
                    .HasColumnName("subname")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.C)
                    .WithMany(p => p.SubCategory)
                    .HasForeignKey(d => d.Cid)
                    .HasConstraintName("FK__SubCategory__cid__628FA481");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Pwd)
                    .IsRequired()
                    .HasColumnName("pwd")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Uname)
                    .IsRequired()
                    .HasColumnName("uname")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
