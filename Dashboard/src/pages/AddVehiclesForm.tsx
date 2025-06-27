import React, { useState } from 'react';
import ImageUpload from '../components/ImageUpload';

enum VehicleType {
  CAR = 'CAR',
  BIKE = 'BIKE',
  SCOOTER = 'SCOOTER'
}

interface VehicleDetails {
  type: string;
  text: string;
}

interface FormProps {
  id: number | null;
  type: VehicleType;    
  title: string;
  image: string;
  description: string;
  details: VehicleDetails[];
  price: string;
  [key: string]: any; //this is for dynamic fields
}

interface ErrorProps{
  type?: string;
  title?: string;
  image?: string;
  description?: string;
  price?: string;
}

const AddVehiclesForm = () => {
    const [selectedType, setSelectedType] = useState('CAR');
    const [formData, setFormData] = useState<FormProps>({
        id: null,
        type: VehicleType.CAR,
        title: '',
        image: '',
        description: '',
        details: [],
        price: '',
    });

    const [errors, setErrors] = useState<ErrorProps>({});
    const [imageUrl, setImageUrl] = useState<string>("");

  const vehicleConfig = {
    CAR: {
        fields: ['seat', 'settings']
    },
    BIKE: {
        fields: ['engine', 'fuel']
    },
    SCOOTER: {
        fields: ['range', 'fuel']
    }
  }

  const getPlaceholder = (field: string): string => {
    const placeholders: Record<string, Record<string, string>> = {
      CAR: {
        seat: 'e.g. 5 seats',
        settings: 'e.g. Automatic transmission'
      },
      BIKE: {
        engine: 'e.g. 250cc',
        fuel: 'e.g. Petrol'
      },
      SCOOTER: {
        range: 'e.g. 80km per charge',
        fuel: 'e.g. Electric'
      }
    };

    return placeholders[selectedType]?.[field];
  };

  const handleVehicleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof ErrorProps]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof ErrorProps];
        return newErrors;
      });
    }
  };

  const renderFields = () => {
  if (!selectedType) return null;
  
  return vehicleConfig[selectedType].fields.map(field => (
    <div key={field} className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1.5 capitalize dark:text-gray-300">
        {field}
      </label>
      <input
        type="text"
        className={`w-full px-4 py-2.5 text-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400`}
        value={formData[field] || ''}
        onChange={(e) => handleVehicleChange(field, e.target.value)}
        placeholder={getPlaceholder(field) || `Enter ${field}`}
      />
    </div>
  ))
}

  const validateForm = (): boolean => {
    const newErrors: ErrorProps = {};
    let isValid = true;

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    }

    if (!formData.price.trim()) {
      newErrors.price = 'Price is required';
      isValid = false;
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = 'Please enter a valid positive number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleImageUpload = async(file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'admin_rental');
    formData.append('cloud_name', 'dedwhvg7h');

    try{
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dedwhvg7h/image/upload`,
        {
          method: 'POST',
          body: formData
        }
      );
      const data = await response.json();
      setImageUrl(data.secure_url)
      console.log(imageUrl)

    } catch(e) {
      console.log("Error uploading image", e);
    }    
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!validateForm()) return;

    const submissionData = {
      ...formData,
      id: Math.random().toString(36).substring(2, 9),
      image: imageUrl,
      details: vehicleConfig[selectedType].fields.map(field => ({
        type: field,
        value: formData[field] || ''
      }))
    };

    console.log('Form submitted:', submissionData);
  };

  return (
   <div className="min-h-screen flex items-center justify-center p-4">
  <form className="bg-white dark:bg-gray-600 p-8 w-[90%] rounded-lg shadow-lg border border-gray-100" onSubmit={handleSubmit}>
    <h2 className="text-3xl font-bold text-[#008080] mb-6 text-center dark:text-white">Add Vehicle</h2>
    
    <div className="grid md:grid-cols-2 gap-6 mb-6">
      <div>
        <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">Select Vehicle Type <span className='text-red-500'> * </span> </label>
        <select
          className="w-full px-4 py-3 border border-gray-300 dark:text-white rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] transition-all"
          value={selectedType}
          onChange={(e) => {
            setSelectedType(e.target.value);
            setFormData({});
          }}
        >
          <option value="">-- Select Vehicle Type --</option>
          {Object.keys(vehicleConfig).map(type => (
            <option key={type} value={type} className="capitalize">{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="title">
          Listing Title <span className='text-red-500'> * </span>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-3 border placeholder-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] transition-all"
          placeholder="e.g. 2022 Tesla Model 3 Long Range"
        />

        {errors.title && (<span className='text-red-500 text-sm'> {errors.title} </span>)}
      </div>
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">Vehicle Images <span className='text-red-500'> * </span>  </label>
      <ImageUpload onImageUpload={handleImageUpload}/>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
        <label className="block text-gray-700 text-sm font-semibold dark:text-gray-300 mb-2" htmlFor="description">
          Description <span className='text-red-500'> * </span>
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] transition-all resize-none placeholder-gray-400"
          placeholder="Describe your vehicle's features, condition, special details, rental terms..."
        ></textarea>
        {errors.description && (<span className='text-red-500 text-sm'> {errors.description} </span>)}

      </div>
      </div> 

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
      <div className="md:col-span-2">
        <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2" htmlFor="price">
          Price (Rs) <span className='text-red-500'> * </span>
        </label>
        <div className="relative">
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] transition-all placeholder-gray-400"
            min="0"
            placeholder="Enter your hourly price"
          />
          {errors.price && (<span className='text-red-500 text-sm'> {errors.price} </span>)}

        </div>
      </div>

      {renderFields()}
    </div>

      <div className="mt-8 flex justify-end space-x-4">   
        <button
          className="px-4 py-3 bg-[#008080] hover:bg-[#006666] text-white font-semibold rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#008080] focus:ring-offset-2"
          type='submit'
        >
          Add Vehicle
        </button>
      </div>
  </form>
</div>
  );
};

export default AddVehiclesForm;