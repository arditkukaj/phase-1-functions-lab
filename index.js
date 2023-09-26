//distancFromHqInBlocks()

function distanceFromHqInBlocks(someValue){

    if(someValue > 42){
        return someValue - 42
    } else {
        return 42 - someValue
    }
}

//DistanceFromHQinFeet()

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264
}


//DistanceTravelledInFeet()


function distanceTravelledInFeet(start, finish){
    if(start < finish){
      return (finish - start) * 264
    } else {
      return (start - finish) * 264
    }
  }



//CalculatesFarePrice(start, destination)

function calculatesFarePrice(start,finish){
    let distance = distanceTravelledInFeet(start,finish)
    if (distance <= 400){
        return 0
    } else if (distance > 400 && distance <= 2000){
    return .02*(distance - 400)
    } else if (distance > 2000 && distance < 2500) {
    return 25
    } else {
    return 'cannot travel that far'
  }
}