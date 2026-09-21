const fs = require('fs');

const stateImages = {
  'Andhra Pradesh': 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Tirumala_090615.jpg',
  'Arunachal Pradesh': 'https://upload.wikimedia.org/wikipedia/commons/9/90/Tawang_Monastery_-_Arunachal_Pradesh.jpg',
  'Assam': 'https://upload.wikimedia.org/wikipedia/commons/1/14/Kaziranga_National_Park_Elephant_Safari.jpg',
  'Bihar': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Mahabodhi_Temple_Bodh_Gaya.jpg/800px-Mahabodhi_Temple_Bodh_Gaya.jpg',
  'Chhattisgarh': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Chitrakoot_waterfalls_in_monsoon.jpg/800px-Chitrakoot_waterfalls_in_monsoon.jpg',
  'Goa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Goa_-_Vagator_Beach.jpg/800px-Goa_-_Vagator_Beach.jpg',
  'Gujarat': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Statue_of_Unity.jpg/800px-Statue_of_Unity.jpg',
  'Haryana': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Brahma_Sarovar_Kurukshetra.jpg/800px-Brahma_Sarovar_Kurukshetra.jpg',
  'Himachal Pradesh': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Shimla_-_View_from_the_ridge.jpg/800px-Shimla_-_View_from_the_ridge.jpg',
  'Jharkhand': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Jonha_Falls.jpg/800px-Jonha_Falls.jpg',
  'Karnataka': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mysore_Palace_Morning.jpg/800px-Mysore_Palace_Morning.jpg',
  'Kerala': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Kerala_houseboat_in_Alleppey.jpg/800px-Kerala_houseboat_in_Alleppey.jpg',
  'Madhya Pradesh': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sanchi_Stupa_from_Eastern_gate.jpg/800px-Sanchi_Stupa_from_Eastern_gate.jpg',
  'Maharashtra': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gateway_of_India%2C_Mumbai.jpg/800px-Gateway_of_India%2C_Mumbai.jpg',
  'Manipur': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Loktak_lake_with_phumdis.jpg/800px-Loktak_lake_with_phumdis.jpg',
  'Meghalaya': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Living_root_bridge_at_Nongriat.jpg/800px-Living_root_bridge_at_Nongriat.jpg',
  'Mizoram': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aizawl_city.jpg/800px-Aizawl_city.jpg',
  'Nagaland': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dzukou_Valley%2C_Nagaland.jpg/800px-Dzukou_Valley%2C_Nagaland.jpg',
  'Odisha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Konark_Sun_Temple_2022.jpg/800px-Konark_Sun_Temple_2022.jpg',
  'Punjab': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/The_Golden_Temple_of_Amritsar.jpg/800px-The_Golden_Temple_of_Amritsar.jpg',
  'Rajasthan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Hawa_Mahal_in_Jaipur.jpg/800px-Hawa_Mahal_in_Jaipur.jpg',
  'Sikkim': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Rumtek_Monastery%2C_Sikkim.jpg/800px-Rumtek_Monastery%2C_Sikkim.jpg',
  'Tamil Nadu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Meenakshi_Amman_Temple_Madurai.jpg/800px-Meenakshi_Amman_Temple_Madurai.jpg',
  'Telangana': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Charminar_2019.jpg/800px-Charminar_2019.jpg',
  'Tripura': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Ujjayanta_Palace%2C_Agartala.jpg/800px-Ujjayanta_Palace%2C_Agartala.jpg',
  'Uttar Pradesh': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Taj_Mahal_in_March_2004.jpg/800px-Taj_Mahal_in_March_2004.jpg',
  'Uttarakhand': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Kedarnath_Temple_Garhwal_Himalayas.jpg/800px-Kedarnath_Temple_Garhwal_Himalayas.jpg',
  'West Bengal': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Victoria_Memorial_Kolkata.jpg/800px-Victoria_Memorial_Kolkata.jpg'
};

const fileContent = fs.readFileSync('client/src/assets/data1.jsx', 'utf8');

// The file exports `data` array. Let's find each state name and replace its image url.
let updatedContent = fileContent;

for (const [state, url] of Object.entries(stateImages)) {
  // Regex to match: name: 'StateName', ... image: "old_url" or image : "old_url"
  // It's a bit tricky to parse without an AST, let's use a simpler approach.
  
  // We can just find the block for the state and replace the image URL.
  const regex = new RegExp(`name:\\s*['"]${state}['"]([\\s\\S]*?)image\\s*:\\s*['"][^'"]+['"]`, 'g');
  updatedContent = updatedContent.replace(regex, `name: '${state}'$1image: '${url}'`);
}

fs.writeFileSync('client/src/assets/data1.jsx', updatedContent);
console.log('Updated data1.jsx');
