using Application.Interfaces;
using Application.Services;
using Domain;
using FluentAssertions;
using NSubstitute;
using NSubstitute.ReturnsExtensions;
using WebApiContracts;

namespace Application.Tests.Services
{
    public class MealPlanServiceTests
    {
        private readonly IMealPlanRepository _mealPlanRepository;
        private readonly IFileRepository _fileRepository;
        private readonly MealPlanService _mealPlanService;

        public MealPlanServiceTests()
        {
            _mealPlanRepository = Substitute.For<IMealPlanRepository>();
            _fileRepository = Substitute.For<IFileRepository>();
            _mealPlanService = new MealPlanService(_mealPlanRepository, _fileRepository);
        }

        [Fact]
        public void AddMealPlan_Should_ReturnTrue_When_MealPlanIsAddedSuccessfully()
        {
            var mealPlanDTO = new MealPlanDTO
            {
                Title = "Test Plan",
                Meals = new List<DayDTO>
                {
                    new DayDTO { Day = 1, Breakfast = Guid.NewGuid(), Lunch = Guid.NewGuid(), Dinner = Guid.NewGuid() }
                }
            };
            var id = Guid.NewGuid();

            _mealPlanRepository.AddMealPlan(Arg.Any<MealPlan>(), id).Returns(true);
            _mealPlanRepository.AddPlanList(Arg.Any<List<PlanList>>()).Returns(true);


            var result = _mealPlanService.AddMealPlan(mealPlanDTO, id);


            result.Should().BeTrue();
        }

        [Fact]
        public void AddMealPlan_Should_ReturnFalse_When_MealPlanIsNotAdded()
        {
            var mealPlanDTO = new MealPlanDTO
            {
                Title = "Test Plan",
                Meals = new List<DayDTO>
                {
                    new DayDTO { Day = 1, Breakfast = Guid.NewGuid(), Lunch = Guid.NewGuid(), Dinner = Guid.NewGuid() }
                }
            };
            var id = Guid.NewGuid();

            _mealPlanRepository.AddMealPlan(Arg.Any<MealPlan>(), id).Returns(false);


            var result = _mealPlanService.AddMealPlan(mealPlanDTO, id);


            result.Should().BeFalse();
        }

        [Fact]
        public void GetMealPlan_Should_ThrowException_When_MealPlanDoesNotExist()
        {
            var id = Guid.NewGuid();

            _mealPlanRepository.GetMealPlan(id).ReturnsNull();


            Action act = () => _mealPlanService.GetMealPlan(id);


            act.Should().Throw<Exception>().WithMessage("Meal plan doesn't exist!");
        }

        [Fact]
        public void GetMealPlan_Should_ReturnMealPlanSend_When_MealPlanExists()
        {
            var id = Guid.NewGuid();
            var mealPlan = new MealPlan { Meal_Plan_Id = id, Title = "Test Plan", Description = "Test Description" };
            var planList = new List<PlanList>
            {
                new PlanList(Guid.NewGuid(), id, 1, 1),
                new PlanList(Guid.NewGuid(), id, 1, 2)
            };
            var file = new FileDetails { Path = "testpath.jpg" };

            _mealPlanRepository.GetMealPlan(id).Returns(mealPlan);
            _mealPlanRepository.GetDays(id).Returns(planList);
            _fileRepository.GetFile(id.ToString().ToUpper()).Returns(new List<FileDetails> { file });


            var result = _mealPlanService.GetMealPlan(id);


            result.Should().NotBeNull();
            result.Title.Should().Be(mealPlan.Title);
            result.Description.Should().Be(mealPlan.Description);
            result.Photo.Should().Be(file.Path);
        }

        [Fact]
        public void GetAllMealPlans_Should_ReturnListOfMealPlanSends()
        {
            var mealPlans = new List<MealPlan>
            {
                new MealPlan { Title = "Plan 1", Description = "Description 1" },
                new MealPlan { Title = "Plan 2", Description = "Description 2" }
            };

            var allDays = new List<PlanList>
            {
                new PlanList (mealPlans[0].Meal_Plan_Id, Guid.NewGuid(), 1, 1),
                new PlanList (mealPlans[1].Meal_Plan_Id, Guid.NewGuid(), 2, 2)
            };

            var files = new List<FileDetails>
            {
                new FileDetails { Path = "path1.jpg" },
                new FileDetails { Path = "path2.jpg" }
            };

            _mealPlanRepository.GetAllMealPlans().Returns(mealPlans);
            _mealPlanRepository.GetAllDays().Returns(allDays);
            _fileRepository.GetAllFiles().Returns(files);

            var result = _mealPlanService.GetAllMealPlans();

            result.Should().HaveCount(2);
            result.ElementAt(0).Title.Should().Be(mealPlans[0].Title);
            result.ElementAt(1).Title.Should().Be(mealPlans[1].Title);
        }

        [Fact]
        public void DeleteMealPlan_Should_ThrowException_When_MealPlanDoesNotExist()
        {
            var id = Guid.NewGuid();

            _mealPlanRepository.DeleteMealPlan(id).Returns(false);

            Action act = () => _mealPlanService.DeleteMealPlan(id);

            act.Should().Throw<Exception>().WithMessage("Meal plan doesn't exist!");
        }

        [Fact]
        public void DeleteMealPlan_Should_ReturnTrue_When_MealPlanIsDeletedSuccessfully()
        {
            var id = Guid.NewGuid();

            _mealPlanRepository.GetMealPlan(id).Returns(new MealPlan());
            _mealPlanRepository.DeleteMealPlan(id).Returns(true);

            var result = _mealPlanService.DeleteMealPlan(id);

            result.Should().BeTrue();
        }


        [Fact]
        public void UpdateMealPlan_Should_ReturnTrue_When_MealPlanIsUpdatedSuccessfully()
        {
            var mealPlanDTO = new MealPlanDTO
            {
                Title = "Updated Plan",
                Description = "Updated Description",
                Meal_Plan_Id = Guid.NewGuid(),
                Meals = new List<DayDTO>
                {
                    new() { Day = 1, Breakfast = Guid.NewGuid(), Lunch = Guid.NewGuid(), Dinner = Guid.NewGuid() },
                    new() { Day = 2, Breakfast = Guid.NewGuid(), Lunch = Guid.NewGuid(), Dinner = Guid.NewGuid() }
                }
            };

            _mealPlanRepository.UpdateMealPlan(Arg.Any<MealPlan>()).Returns(true);
            _mealPlanRepository.UpdatePlanList(Arg.Any<PlanList>()).Returns(true);


            var result = _mealPlanService.UpdateMealPlan(mealPlanDTO);


            result.Should().BeTrue();
        }

        [Fact]
        public void UpdateMealPlan_Should_ReturnFalse_When_MealPlanIsNotUpdated()
        {
            var mealPlanDTO = new MealPlanDTO
            {
                Title = "Updated Plan",
                Description = "Updated Description",
                Meal_Plan_Id = Guid.NewGuid(),
                Meals = new List<DayDTO>
                {
                    new() { Day = 1, Breakfast = Guid.NewGuid(), Lunch = Guid.NewGuid(), Dinner = Guid.NewGuid() },
                    new() { Day = 2, Breakfast = Guid.NewGuid(), Lunch = Guid.NewGuid(), Dinner = Guid.NewGuid() }
                }
            };

            _mealPlanRepository.UpdateMealPlan(Arg.Any<MealPlan>()).Returns(false);

            var result = _mealPlanService.UpdateMealPlan(mealPlanDTO);

            result.Should().BeFalse();
        }
    }
}
