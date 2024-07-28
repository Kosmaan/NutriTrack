using Application.Interfaces;
using Application.Services;
using Domain;
using FluentAssertions;
using NSubstitute;
using NSubstitute.ReturnsExtensions;
using WebApi.Controllers;
using WebApiContracts;
using WebApiContracts.Mappers;

namespace Application.Tests.Services
{
    public class MealServiceTests
    {
        private readonly IMealRepository _mealRepository;
        private readonly IFileRepository _fileRepository;
        private readonly MealService _mealService;
        private readonly MealController _mealController;

        public MealServiceTests()
        {
            _mealRepository = Substitute.For<IMealRepository>();
            _fileRepository = Substitute.For<IFileRepository>();
            _mealService = new MealService(_mealRepository, _fileRepository);
        }

        [Fact]
        public void AddMeal_Should_ReturnTrue_When_MealIsAddedSuccessfully()
        {
            var meal = new Meal { Title = "Test Meal", Description = "Test Description" };
            var id = Guid.NewGuid();

            _mealRepository.addMeal(meal, id).Returns(true);


            var result = _mealService.addMeal(meal, id);


            result.Should().BeTrue();
        }

        [Fact]
        public void AddMeal_Should_ReturnFalse_When_MealIsNotAdded()
        {
            var meal = new Meal { Title = "Test Meal", Description = "Test Description" };
            var id = Guid.NewGuid();

            _mealRepository.addMeal(meal, id).Returns(false);


            var result = _mealService.addMeal(meal, id);


            result.Should().BeFalse();
        }

        [Fact]
        public void UpdateMeal_Should_ReturnTrue_When_MealIsUpdatedSuccessfully()
        {
            var mealDTO = new MealDTO { Title = "Updated Meal", Description = "Updated Description" };

            _mealRepository.UpdateMeal(Arg.Any<Meal>()).Returns(true);


            var result = _mealService.UpdateMeal(mealDTO);


            result.Should().BeTrue();
        }

        [Fact]
        public void UpdateMeal_Should_ReturnFalse_When_MealIsNotUpdated()
        {
            var mealDTO = new MealDTO { Title = "Updated Meal", Description = "Updated Description" };

            _mealRepository.UpdateMeal(Arg.Any<Meal>()).Returns(false);


            var result = _mealService.UpdateMeal(mealDTO);


            result.Should().BeFalse();
        }

        [Fact]
        public void GetMealById_Should_ReturnMealDTO_When_MealExists()
        {
            var id = Guid.NewGuid();
            var meal = new Meal { Title = "Test Meal", Description = "Test Description" };
            var file = new FileDetails { Path = "testpath.jpg" };

            _mealRepository.GetMeal(id).Returns(meal);
            _fileRepository.GetFile(id.ToString().ToUpper()).Returns(new List<FileDetails> { file });


            var result = _mealService.GetMealById(id);


            result.Should().NotBeNull();
            result.Title.Should().Be(meal.Title);
            result.Description.Should().Be(meal.Description);
            result.Photo.Should().Be(file.Path);
        }

        [Fact]
        public void GetMealById_Should_ThrowException_When_MealDoesNotExist()
        {
            var id = Guid.NewGuid();

            _mealRepository.GetMeal(id).ReturnsNull();
            _fileRepository.GetFile(id.ToString().ToUpper()).ReturnsNull();


            Action act = () => _mealService.GetMealById(id);


            act.Should().Throw<Exception>().WithMessage("Meal doesn't exist!");
        }

        [Fact]
        public void GetAllMeals_Should_ReturnListOfMealDTOs()
        {
            var meals = new List<Meal>
            {
                new Meal { Title = "Meal 1", Description = "Description 1" },
                new Meal { Title = "Meal 2", Description = "Description 2" }
            };

            _mealRepository.GetAllMeals().Returns(meals);


            var result = _mealService.GetAllMeals();


            result.Should().HaveCount(2);
            result.ElementAt(0).Title.Should().Be(meals[0].Title);
            result.ElementAt(1).Title.Should().Be(meals[1].Title);
        }

        [Fact]
        public void DeleteMeal_Should_ReturnTrue_When_MealIsDeletedSuccessfully()
        {
            var id = Guid.NewGuid();

            _mealRepository.GetMeal(id).Returns(new Meal() { Meal_Id = id });
            _mealRepository.DeleteMeal(id).Returns(true);


            var result = _mealService.DeleteMeal(id);


            result.Should().BeTrue();
        }

        [Fact]
        public void DeleteMeal_Should_ThrowException_When_MealDoesNotExist()
        {
            var id = Guid.NewGuid();

            _mealRepository.GetMeal(id).ReturnsNull();

            Action act = () => _mealService.DeleteMeal(id);

            act.Should().Throw<Exception>().WithMessage("Meal doesn't exist!");
        }
    }
}
