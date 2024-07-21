{
  let A = 1;
  let B = 2;

  console.log('"A" vale ' + A + ' e "B" vale ' + B);

  let C = B;
  B = A;
  A = C;

  console.log('"A" vale ' + A + ' e "B" vale ' + B);
}

// forma simples
{
  let A = 1;
  let B = 2;

  console.log('"A" vale ' + A + ' e "B" vale ' + B);

  [A, B] = [B, A];

  console.log('"A" vale ' + A + ' e "B" vale ' + B);
}
