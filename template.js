const DEV_INPUT_PATH = "in.txt";

if (process.platform !== "linux") {
  const start = new Date();
  const memory = Math.floor(process.memoryUsage().heapUsed / 1024 / 1024);

  console.log(solution(require("fs").readFileSync(DEV_INPUT_PATH).toString().trim()));
  console.log(`memory: ${memory}mb`);
  console.log(`time: ${new Date() - start}ms`);

  return;
}

// --- 위 코드는 제출시 복사하지 말 것 ---

console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [a, b] = input.split(" "); // input이 "a b일 경우"

  return a + b;
}

