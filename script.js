function showWorkout(muscleGroup) {
    const modal = document.getElementById('workout-modal');
    let workoutInfo;
  
    // Define workouts for each muscle group
    switch (muscleGroup) {
      case 'Chest':
        workoutInfo = `
          <h3>Chest Workouts</h3>
          <ul>
            <li>Bench Press</li>
            <li>Incline Dumbbell Press</li>
            <li>Chest Fly (Machine or Dumbbells)</li>
            <li>Push-Ups</li>
            <li>Incline Bench Press</li>
            <li>Cable Crossovers</li>
          </ul>`;
        break;
      case 'Back':
        workoutInfo = `
          <h3>Back Workouts</h3>
          <ul>
            <li>Pull-Ups</li>
            <li>Barbell Rows</li>
            <li>Deadlifts</li>
            <li>Lat Pulldown</li>
            <li>Seated Cable Rows</li>
            <li>Single-Arm Dumbbell Row</li>
          </ul>`;
        break;
      case 'Biceps':
        workoutInfo = `
          <h3>Biceps Workouts</h3>
          <ul>
            <li>Barbell Curls</li>
            <li>Hammer Curls</li>
            <li>Concentration Curls</li>
            <li>Incline Dumbbell Curls</li>
            <li>Preacher Curls</li>
          </ul>`;
        break;
      case 'Triceps':
        workoutInfo = `
          <h3>Triceps Workouts</h3>
          <ul>
            <li>Tricep Dips</li>
            <li>Close-Grip Bench Press</li>
            <li>Skull Crushers</li>
            <li>Cable Pushdowns</li>
            <li>Overhead Dumbbell Triceps Extension</li>
          </ul>`;
        break;
      case 'Shoulders':
        workoutInfo = `
          <h3>Shoulders Workouts</h3>
          <ul>
            <li>Overhead Press</li>
            <li>Lateral Raises</li>
            <li>Front Raises</li>
            <li>Arnold Press</li>
            <li>Face Pulls</li>
            <li>Reverse Fly</li>
          </ul>`;
        break;
      case 'Legs':
        workoutInfo = `
          <h3>Legs Workouts</h3>
          <ul>
            <li>Squats</li>
            <li>Leg Press</li>
            <li>Walking Lunges</li>
            <li>Bulgarian Split Squats</li>
            <li>Romanian Deadlifts</li>
            <li>Leg Extensions</li>
            <li>Hamstring Curls</li>
          </ul>`;
        break;
      case 'Abs':
        workoutInfo = `
          <h3>Abs Workouts</h3>
          <ul>
            <li>Crunches</li>
            <li>Leg Raises</li>
            <li>Plank</li>
            <li>Bicycle Crunches</li>
            <li>Russian Twists</li>
            <li>Mountain Climbers</li>
          </ul>`;
        break;
      case 'Calves':
        workoutInfo = `
          <h3>Calves Workouts</h3>
          <ul>
            <li>Standing Calf Raises</li>
            <li>Seated Calf Raises</li>
            <li>Donkey Calf Raises</li>
            <li>Single-Leg Calf Raises</li>
          </ul>`;
        break;
      default:
        workoutInfo = '<p>No workouts available for this muscle group.</p>';
    }
  
    // Update modal content and display it
    modal.innerHTML = workoutInfo;
    modal.style.display = 'block';
  }
  
  // Close modal when clicking outside (optional)
  document.addEventListener('click', function (e) {
    const modal = document.getElementById('workout-modal');
    if (modal.style.display === 'block' && !e.target.closest('#workout-modal') && !e.target.closest('.muscle-group')) {
      modal.style.display = 'none';
    }
  });
  
  
  const splits = {
    3: "Day 1: Chest & Back\nDay 2: Rest\nDay 3: Legs",
    4: "Day 1: Chest\nDay 2: Back\nDay 3: Legs\nDay 4: Shoulders",
    5: "Day 1: Chest\nDay 2: Back\nDay 3: Legs\nDay 4: Shoulders\nDay 5: Arms",
    6: "Day 1: Chest\nDay 2: Back\nDay 3: Legs\nDay 4: Shoulders\nDay 5: Arms\nDay 6: Cardio"
  };
  
  function showWorkoutSplit() {
    const split = $('#workout-split').val();
    $('#workout-schedule').text(splits[split]);
  }
  
  function showNutrition(type) {
    const nutrition = {
      'fat-loss': `
        <h3>Nutrition Tips for Fat Loss</h3>
        <ul>
          <li>Focus on high-protein, low-carb meals to maintain muscle mass while reducing fat.</li>
          <li>Incorporate plenty of vegetables like broccoli, spinach, and kale for fiber and nutrients.</li>
          <li>Avoid processed foods, sugary drinks, and snacks with high calories but low nutrition.</li>
          <li>Include healthy fats like avocado, olive oil, and nuts in moderation.</li>
          <li>Drink at least 8 glasses of water daily to stay hydrated and curb hunger.</li>
          <li>Consider intermittent fasting (16/8 or 14/10) to create a calorie deficit.</li>
          <li>Stick to lean proteins such as chicken breast, turkey, fish, and egg whites.</li>
        </ul>
      `,
      'muscle-gain': `
        <h3>Nutrition Tips for Muscle Gain</h3>
        <ul>
          <li>Increase your calorie intake with a focus on high-quality, nutrient-dense foods.</li>
          <li>Ensure a balanced intake of macronutrients: 40% carbs, 30% protein, and 30% fats.</li>
          <li>Include complex carbs like brown rice, oats, sweet potatoes, and whole grains for sustained energy.</li>
          <li>Consume high-protein foods such as chicken, beef, eggs, fish, and plant-based proteins (tofu, lentils).</li>
          <li>Incorporate healthy fats like nut butters, seeds, avocados, and fatty fish (salmon, mackerel).</li>
          <li>Have frequent meals (5–6 per day) with a mix of carbs, protein, and healthy fats.</li>
          <li>Drink a post-workout protein shake or eat protein-rich snacks to aid recovery.</li>
        </ul>
      `
    };
  
    // Display the corresponding nutrition advice
    $('#nutrition-info').html(nutrition[type]);
  }
  
  
  function calculateBMR() {
    const weight = +$('#bmr-weight').val();
    const height = +$('#bmr-height').val();
    const age = +$('#bmr-age').val();
    const activity = +$('#bmr-activity').val();
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    $('#bmr-result').text(`Your BMR is ${(bmr * activity).toFixed(2)} calories/day`);
  }
  
  function calculateBMI() {
    const weight = +$('#bmi-weight').val();
    const height = +$('#bmi-height').val();
    const bmi = weight / (height * height);
    $('#bmi-result').text(`Your BMI is ${bmi.toFixed(2)}`);
  }
  document.getElementById('hamburger-btn').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open'); // Add/remove 'open' class to show/hide the menu
  });