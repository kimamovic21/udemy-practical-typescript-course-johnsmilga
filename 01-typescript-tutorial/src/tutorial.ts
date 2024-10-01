function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
};

let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount); 

let priceWithoutDiscount = calculatePrice(300);
console.log(priceWithoutDiscount); 

function calculateScore(initialScore: number, penaltyPoints: number = 0): number {
  return initialScore - penaltyPoints;
};

let scoreAfterPenalty = calculateScore(100, 20);
console.log(scoreAfterPenalty); 

let scoreWithoutPenalty = calculateScore(300);
console.log(scoreWithoutPenalty); 