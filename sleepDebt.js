const getSleepHours = (day) => {
    switch (day) {
      case 'Monday':
      return 8
      break;
  
      case 'Tuesday':
      return 9 
      break;
  
      case 'Wednesday':
      return 5
      break;
  
      case 'Thursday':
      return 2
      break;
  
      case 'Friday':
      return 10
      break;
  
      case 'Saturday':
      return 5
      break;
  
      case 'Sunday':
      return 3
      break;
  
      default:
      return ''
      break;
    }
  
  }
  
  console.log (getSleepHours('Saturday'))
  
  const getActualSleepHours = () => {
    const addSleepHours = getSleepHours ('Monday') + getSleepHours ('Tuesday') + getSleepHours ('Wednesday') + getSleepHours ('Thursday') + getSleepHours ('Friday') + getSleepHours ('Saturday') + getSleepHours ('Sunday')
  
    return addSleepHours
  
  }
  
  console.log (getActualSleepHours())
  
  const getIdealSleepHours = () => {
    const idealHours = 6
    return idealHours * 7
  }
  
  console.log (getIdealSleepHours())
  
  calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
  
    const idealSleepHours = getIdealSleepHours()
  
    if (actualSleepHours === idealSleepHours){
      console.log ('You got the perfect amount of sleep')
    } else if (actualSleepHours > idealSleepHours){
      console.log ('You had more sleep than required')
    } else {
      console.log ('Your amount of sleep was not enough so get some rest')
    }
  }
  
  calculateSleepDebt()