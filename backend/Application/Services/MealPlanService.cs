﻿using Application.Interfaces;
using Domain;
using WebApiContracts;
using WebApiContracts.Mappers;

namespace Application.Services
{
    public class MealPlanService
    {
        private IMealPlanRepository _mealPlanRepository;
        private IFileRepository _fileRepository;

        public MealPlanService(IMealPlanRepository mealPlanRepository, IFileRepository fileRepository)
        {
            _mealPlanRepository = mealPlanRepository;
            _fileRepository = fileRepository;
        }

        public bool AddMealPlan(MealPlanDTO mealPlanDTO, Guid id)
        {
            var result1 = _mealPlanRepository.AddMealPlan(mealPlanDTO.ToEntity(), id);
            var result2 = _mealPlanRepository.AddPlanList(mealPlanDTO.ToPlanList(id));
            
            return result1 && result2;
        }

        public MealPlanSend GetMealPlan(Guid id)
        {
            var mealPlan = _mealPlanRepository.GetMealPlan(id);
            var daysOfThePlan = _mealPlanRepository.GetDays(id);
            var file = _fileRepository.GetFile(id.ToString().ToUpper());
            var photo = file.FirstOrDefault().Path;
            MealPlanSend mealPlanSend = MealPlanMapper.ToSend(mealPlan, daysOfThePlan, photo);
            mealPlanSend.Photo = photo;

            return mealPlanSend;
        }

        public bool DeleteMeal(Guid id)
        {
            return _mealPlanRepository.DeleteMealPlan(id);
        }

        public IEnumerable<MealPlanSend> GetAllMealPlans()
        {
            var mealPlans = _mealPlanRepository.GetAllMealPlans();
            var allDays = _mealPlanRepository.GetAllDays();
            var files = _fileRepository.GetAllFiles();
            List<MealPlanSend> sender = MealPlanMapper.ToSend(mealPlans, allDays,files);
            return sender;
            
        }

        public bool UpdateMealPlan(MealPlanDTO mealPlan)
        {
            return _mealPlanRepository.UpdateMealPlan(mealPlan.ToEntity());
        }
    }
}