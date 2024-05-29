const {CityService} = require('../services/index');

const cityService = new CityService();

const create = async(req,res)=>{
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully created a city",
            error:{},
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a city",
            error:error,
        });
    }
}

const destroy = async(req,res)=>{
    try{
        const response = await cityService.deleteCity(req.params.cityId);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully deleted a city",
            error:{},
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete the city",
            error:error,
        });
    }
}

const update = async(req,res)=>{
    try{
        const response = await cityService.updateCity(req.params.cityId,req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully update the city",
            error:{},
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update the city",
            error:error,
        });
    }
}

const get = async(req,res)=>{
    try{
        const response = cityService.getCity(req.params.cityId);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully Fetched a city",
            error:{},
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get the city",
            error:error,
        });
    }
}
module.exports = {
    create,
    destroy,
    update,
    get
}