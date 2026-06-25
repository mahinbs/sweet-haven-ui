-- Optional seed data. Run AFTER schema.sql and AFTER creating an admin user.
-- Replace category IDs are auto-generated; this uses subqueries by slug.

INSERT INTO categories (slug, title, label, image, headline, description, filters, show_on_homepage, sort_order) VALUES
('cakes', 'Cakes', 'CAKES', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
 'We have a Cake for Every Celebration',
 'From classic vanilla sponges to decadent chocolate ganache, discover handcrafted cakes designed to make every occasion sweeter.',
 '["All Cakes", "Layer Cakes", "Cheesecakes", "Cupcakes", "Celebration"]'::jsonb, true, 1),
('pastries', 'Pastries', 'PASTRIES', 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80',
 'Handcrafted Pastries Baked Fresh Daily',
 'Flaky, buttery, and made by hand—our pastry collection is inspired by Parisian bakeries and perfected in-house.',
 '["All Pastries", "Croissants", "Puffs", "Danishes", "Seasonal"]'::jsonb, true, 2),
('bread', 'Bread', 'BREADS', 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80',
 'Artisan Bread with Heart and Heritage',
 'Slow-fermented loaves with a crisp crust and tender crumb, using locally milled flour and time-honored techniques.',
 '["All Bread", "Sourdough", "Baguettes", "Whole Grain", "Specialty"]'::jsonb, true, 3),
('cookies', 'Cookies', 'COOKIES', 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80',
 'Small Treats with Big Flavor',
 'Chewy, crunchy, and everything in between—our cookies are baked in small batches throughout the day.',
 '["All Cookies", "Chewy", "Crunchy", "Filled", "Seasonal"]'::jsonb, true, 4),
('special-orders', 'Special Orders', 'CUSTOM', 'https://images.unsplash.com/photo-1619221882220-947b3d3c8861?w=800&q=80',
 'Custom Creations for Every Milestone',
 'Work one-on-one with our pastry chefs to design bespoke cakes, dessert tables, and corporate gifts.',
 '["All Specialties", "Wedding", "Corporate", "Festive", "Gifting"]'::jsonb, false, 5),
('macarons', 'Macarons', 'MACARONS', 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80',
 'Colorful Macarons Crafted with Precision',
 'Delicate almond shells filled with ganache, curd, or buttercream—each macaron is a bite-sized celebration.',
 '["All Macarons", "Signature", "Seasonal", "Gift Boxes", "Limited Edition"]'::jsonb, true, 6)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO products (category_id, name, description, image, price, price_value, filter_tag, featured) VALUES
((SELECT id FROM categories WHERE slug = 'cakes'), 'Midnight Ganache Cake', 'Dark chocolate sponge layered with silky ganache and berry compote.', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80', '$48', 48, 'Layer Cakes', true),
((SELECT id FROM categories WHERE slug = 'cakes'), 'Strawberry Fields', 'Vanilla chiffon with fresh strawberries and whipped mascarpone.', 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80', '$42', 42, 'Layer Cakes', false),
((SELECT id FROM categories WHERE slug = 'pastries'), 'Almond Croissant', 'Twice-baked croissant filled with almond cream and toasted almonds.', 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80', '$5', 5, 'Croissants', true),
((SELECT id FROM categories WHERE slug = 'pastries'), 'Vanilla Bean Éclair', 'Choux pastry piped with vanilla custard and dipped in ganache.', 'https://images.unsplash.com/photo-1586985289688-ca3cf47dce3b?w=800&q=80', '$6', 6, 'Puffs', false),
((SELECT id FROM categories WHERE slug = 'bread'), 'Country Sourdough', 'Naturally leavened loaf with a caramelized crust and airy crumb.', 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80', '$8', 8, 'Sourdough', true),
((SELECT id FROM categories WHERE slug = 'cookies'), 'Salted Chocolate Chunk', 'Brown butter dough loaded with dark chocolate and flaky salt.', 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80', '$3', 3, 'Chewy', false),
((SELECT id FROM categories WHERE slug = 'macarons'), 'Signature Assortment', 'Box of 12 featuring vanilla bean, pistachio, raspberry, and chocolate.', 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80', '$24', 24, 'Signature', true);

INSERT INTO jobs (slug, title, department, location, type, description, requirements, is_active, sort_order) VALUES
('pastry-chef', 'Master Pastry Chef', 'Kitchen Operations', 'Aligarh Facility', 'Full-Time',
 'Lead our creative pastry division to conceptualize, design, and produce premium cakes, croissants, and celebration sweets.',
 '["5+ years of experience in high-end commercial baking or pastry arts.", "In-depth knowledge of French pastry techniques and Indian fusion flavors.", "Strong leadership and kitchen management skills."]'::jsonb, true, 1),
('qa-executive', 'Quality Assurance Executive', 'Plant Operations', 'Aligarh Facility', 'Full-Time',
 'Monitor and evaluate all raw ingredients, production line processes, and packaging standards.',
 '["Degree in Food Science, Microbiology, or related field.", "Familiarity with ISO, HACCP, and FSSAI guidelines.", "High attention to detail and rigorous auditing skills."]'::jsonb, true, 2),
('sales-manager', 'Territory Sales Manager', 'Sales & Distribution', 'Western UP Region', 'Full-Time',
 'Grow Honey Gold retail footprint and wholesale distribution channels.',
 '["3+ years of experience in FMCG or food product sales.", "Strong negotiation, communication, and regional market network.", "Willingness to travel locally within the territory."]'::jsonb, true, 3),
('cake-decorator', 'Cake Decorator & Artist', 'Custom Celebrations', 'Aligarh Facility', 'Full-Time',
 'Design and execute beautiful, intricate custom cakes for birthdays, weddings, and special events.',
 '["Proven portfolio of custom cake designs and sugarcraft.", "Experience working with fondant, sculpting, and colors.", "Ability to work efficiently under tight delivery deadlines."]'::jsonb, true, 4)
ON CONFLICT (slug) DO NOTHING;

-- After creating an admin user in Supabase Auth, add them to admin_users:
-- INSERT INTO admin_users (user_id) VALUES ('your-auth-user-uuid-here');
