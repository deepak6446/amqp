with open('inputFileCounter.txt', 'w') as f:
    data = [x for x in range(0, 10)]
    f.write(str(data))