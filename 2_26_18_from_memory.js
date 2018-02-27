const baseConverter = (n, b) => {
  if (n === 0) {
    return ""
  }
  const digits = "0123456789abcdef".split("")
  return baseConverter(Math.floor(n / b), b) + digits[n % b]
}

function binarySearch(arr, target) {
  if (arr.length === 0) {
    return -1
  }

  const mid = Math.floor(arr.length / 2)
  if (arr[mid] === target) {
    return mid
  } else if (arr[mid] > target) {
    const left = arr.slice(0, mid)
    return binarySearch(left, target)
  } else {
    const right = arr.slice(mid + 1)
    const subProblem = binarySearch(right, target)
    return subProblem === -1 ? -1 : subProblem + (mid + 1)
  }
}

const subSets = (arr) => {
  if (arr.length === 0) {
    return [[]]
  }
  const first = [0]
  const subs = arr.slice(1)
  const newSubs = subs.map(sub => [first].concat(sub))
  return subs.concat(newSubs)
}

const permutations = (arr) => {
  if (arr.length === 1) {
    return [arr]
  }
  const first = arr.shift()
  let perms = permutations(arr)
  let totalPerms = []
  perms.forEach(perm => {
    for (let i = 0; i < perms.length + 1; i++) {
      totalPerms.push(perm.slice(0, i)).concat([first], perm.slice(i, perms.length))
    }
  })
  return totalPerms
}

const deepDup = arr => {
  return arr.map(el => el instanceof Array ? : deepDup(el) : el)
}

const mergSort = (arr) => {
  if (arr.length) <= 1 {
    return arr;
  }
  const mid = Math.floor(arr.length/2)
  const left = mergSort(arr.slice(0, mid))
  const right = mergSort(arr.slice(mid + 1))
  return merge(left, right)
}

const merge = (left, right) => {
  let sorted = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }
  return sorted.concat(left, right)
}

Array.prototype.transpose() {
  let cols = []
  for (let i = 0; i < this[0].length; i++) {
    cols.push([])
  }
  for (let j = 0; j < this.length; j++) {
    for (let k = 0; k < this[j].length; k++) {
      cols[k].push(this[j][k])
    }
  }
  return cols
}

Array.prototype.quickSort() {
  if (this.length < 2) {
    return this
  }
  let pivot = this[0]
  let left = []
  let right = []
  for (let i = 1; i < this.length; i++) {
    if (this[i] < pivot) {
      left.push(this[i])
    } else {
      right.push(this[i])
    }
  }
  return left.quickSort().concat(pivot, right.quickSort())
}

const primeFactorization = (num) => {
  if (num <= 1) {
    return []
  }
  for (let idx = 2; idx <= num; idx++) {
    if (num % idx === 0) {
      return [idx].concat(primeFactorization(num / idx))
    }
  }
  return [num]
}

Function.prototype.inherits(BaseClass) {
  // or this.prototype = Object.create(BaseClass.prototype)
  function Surrogate() {};
  Surrogate.prototype = BaseClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

Function.prototype.curry(numArgs) {
  const args = []
  const fn = this;
  function _curriedFn(arg) {
    args.push(arg)
    if (args.length === numArgs) {
      return fn(..args)
    } else {
      return _curriedFn
    }
  }
  return _curriedFn
}

def inorder_traversal(root)
  return nil if root.nil?
  traversed = []
  traversed += inorder_traversal(root.left)
  traversed << root.value
  traversed += inorder_traversal(root.right)
  traversed
end

def is_symmetric(root)
  q = Queue.new
  q.push(root)
  q.push(root)
  until q.empty?
    t1 = q.shift
    t2 = q.shift
    next if t1.nil? && t2.nil?
    return false if t1.nil || t2.nil?
    return false if t1.val != t2.val
    q.push(t1.left)
    q.push(t2.right)
    q.push(t1.right)
    q.push(t2.left)
  end
  true
end

def invert_tree(root)
  return nil if root.nil?
  right = invert_tree(root.right)
  left = invert_tree(root.left)
  root.left = right
  root.right = left
  root
end

def highest_product_of_3(arr)
  if arr.length < 3
    raise exception, "Less than 3 items!"
  end

  highest = [arr[0], arr[1]].max
  lowest = [arr[0], arr[1]].min
  highest_prod_2 = arr[0] * arr[1]
  lowest_prod_2 = arr[0] * arr[1]
  highest_prod_3 = arr[0] * arr[1] * arr[2]
  arr.each_with_index do |curr, idx|
    next if idx < 2
    highest_product_of_3 = [highest_product_of_3, curr * highest_prod_2, curr * lowest_prod_2].max
    highest_prod_2 = [highest_prod_2, curr * highest, curr * lowest].max
    lowest_prod_2 = [lowest_prod_2, curr * highest, curr * lowest].min
    highest = [highest, curr].max
    lowest = [lowest, curr].min
  end
  highest_prod_3
end

const searchNestedObj = (obj) => {
  for (let key in obj) {
    if (obj[key] === target) {
      return true
    } else if (typeof obj[key] === "object") {
      return searchNestedObj(obj[key])
    }
  }
  return false
}

def single_nums(num)
  result = 0
  nums.each do |num|
    result ^= num
  end
  result
end

def count_battleships(board)
  count = 0
  (0...board.length).each do |i|
    (0...board[0].length).each do |j|
      next if board[i][j] == "."
      next if i > 0 && board[i - 1][j] == "X"
      next if i > 0 && board[i][j - 1] == "X"
      count += 1
    end
  end
  count
end

def len_of_longest_substr(s)
  map = {}
  max = 0
  s_start = 0
  (0...s.length - s_start).each do |s_end|
    if map[s[s_end]]
      s_start = [s_start, map[s[s_end]] + 1].max
    end
    map[s[s_end]] = s_end
    max = [max, s_end -  s_start + 1].max
  end
  max
end

class Minstack
