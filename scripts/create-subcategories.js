const axios = require('axios');
const ck = 'ck_4e0c72d36d492c44c4137fc603e73a6faceb5864';
const cs = 'cs_b29e165d71328a87be8ce04856e4b35b9a14174b';
const baseUrl = 'https://admin.cyberland.pk/wp/wp-json/wc/v3';

async function manageCategories() {
  try {
    const getRes = await axios.get(baseUrl + '/products/categories', {
      params: { consumer_key: ck, consumer_secret: cs, per_page: 50 }
    });
    console.log('Existing Categories:');
    getRes.data.forEach(c => {
      console.log(`- ID: ${c.id}, Name: ${c.name}, Slug: ${c.slug}, Parent: ${c.parent}`);
    });

    const laptopsCat = getRes.data.find(c => c.slug === 'laptops' || c.name.toLowerCase() === 'laptops');
    const parentId = laptopsCat ? laptopsCat.id : 0;
    console.log('\nLaptops Parent ID:', parentId);

    // Create 'New Laptops'
    let newLaptops = getRes.data.find(c => c.slug === 'new-laptops');
    if (!newLaptops) {
      console.log('Creating New Laptops category...');
      const createNew = await axios.post(baseUrl + '/products/categories', {
        name: 'New Laptops',
        slug: 'new-laptops',
        parent: parentId,
        description: 'Brand new gaming, creator, and performance laptops.'
      }, {
        params: { consumer_key: ck, consumer_secret: cs }
      });
      console.log('✅ Created New Laptops (ID: ' + createNew.data.id + ')');
    } else {
      console.log('ℹ️ New Laptops already exists (ID: ' + newLaptops.id + ')');
    }

    // Create 'Used Laptops'
    let usedLaptops = getRes.data.find(c => c.slug === 'used-laptops');
    if (!usedLaptops) {
      console.log('Creating Used Laptops category...');
      const createUsed = await axios.post(baseUrl + '/products/categories', {
        name: 'Used Laptops',
        slug: 'used-laptops',
        parent: parentId,
        description: 'Certified pre-owned and refurbished laptops.'
      }, {
        params: { consumer_key: ck, consumer_secret: cs }
      });
      console.log('✅ Created Used Laptops (ID: ' + createUsed.data.id + ')');
    } else {
      console.log('ℹ️ Used Laptops already exists (ID: ' + usedLaptops.id + ')');
    }

  } catch (err) {
    console.error('Error:', err.response?.data || err.message);
  }
}

manageCategories();
