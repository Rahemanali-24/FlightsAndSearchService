const {CityService} = require('../services/index');
const cityService = new CityService();


const {	StatusCodes} = require('http-status-codes');


const create = async(req,res)=>{
    try{
        const response = await cityService.createCity(req.body);
        return res.status(StatusCodes.CREATED).json({
            data:response,
            success:true,
            message:"Successfully created a city",
            error:{},
        });
    }catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to create a city",
            error:error,
        });
    }
}

const destroy = async(req,res)=>{
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(StatusCodes.OK).json({
            data:response,
            success:true,
            message:"Successfully deleted a city",
            error:{},
        });
    }catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to delete the city",
            error:error,
        });
    }
}

const update = async(req,res)=>{
    try{
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(StatusCodes.OK).json({
            data:response,
            success:true,
            message:"Successfully update the city",
            error:{},
        });

    }catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to update the city",
            error:error,
        });
    }
}

const get = async(req,res)=>{
    try{
        const response = await cityService.getCity(req.params.id);

        
        return res.status(StatusCodes.OK).json({
            data:response,
            success:true,
            message:"Successfully Fetched a city",
            error:{},
        });
    }catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
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
    get,
}