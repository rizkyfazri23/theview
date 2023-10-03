export const fetchHouseData = async (statusFilter) => {
  try {
    const queryString = new URLSearchParams(statusFilter).toString();
    const apiUrl = `http://localhost:5000/houses?${queryString}`;
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("Fetched house data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching house data:", error);
    return null;
  }
};



export const fetchOneHouseData = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/houses/${id}`);
        const data = await response.json();
        console.log("Fetched house data:", data); // Tambahkan log ini
        return data;
    } catch (error) {
        console.error("Error fetching house data:", error);
        return null;
    }
};


export const loginUser = async (username, password) => {
  try {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.status === 401) {
      const data = await response.json();
      console.error('Error logging in:', data.message);
      return null;
    }

    const data = await response.json();
    console.log('Logged in user:', data.token);
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
};

export const updateHouseData = async (houseId, newData) => {
  try {
    const response = await fetch(`http://localhost:5000/houses/${houseId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    if (response.status !== 200) {
      const data = await response.json();
      console.error('Error updating house data:', data.message);
      return false;
    }

    console.log('House data updated successfully');
    return true;
  } catch (error) {
    console.error('Error updating house data:', error);
    return false;
  }
};

// Fungsi untuk mengunggah gambar ke server
export async function uploadImage(imageFile, houseId) {
 
  try {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch(`http://localhost:5000/houses/${houseId}/upload-image`, {
      method: 'POST',
      body: formData,
    });

    if (response.status === 200) {
      const data = await response.json();
      return data.imageUrl; // Kembalikan URL gambar setelah gambar berhasil diunggah
    } else {
      throw new Error('Failed to upload image.');
    }
  } catch (error) {
    throw new Error('Failed to upload image: ' + error.message);
  }
}


// Fungsi untuk menghapus gambar dari server
export async function deleteImage(imageUrl, houseId) {
  console.log(`http://localhost:5000/houses/${houseId}/delete-image?urlImage=${encodeURIComponent(imageUrl)}`)
  try {
    const response = await fetch(`http://localhost:5000/houses/${houseId}/delete-image?urlImage=${encodeURIComponent(imageUrl)}`, {
    method: 'DELETE',
  });


    if (response.status !== 200) {
      throw new Error('Failed to delete image.');
    }
  } catch (error) {
    throw new Error('Failed to delete image: ' + error.message);
  }
}

