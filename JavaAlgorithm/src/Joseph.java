public class Joseph {

    private static Integer compute(Integer total, Integer keyNumber) {
        /*开始时设置一个长度为总人数的数组，并将元素都设为true start*/
        Boolean[] peopleFlags = new Boolean[total];
        for (int i = 0; i < total; i++) {
            peopleFlags[i] = true;
        }
        int peopleLeft = total; //剩下的人数
        int count = 0; //计数器，每过一个人加一，加到keyNumber时归零
        int index = 0; //标记从哪里开始

        while (peopleLeft > 1) {
            if (peopleFlags[index]) {
                //说明还没有被淘汰 计数器加1
                count++;

                if (count == keyNumber) {
                    count = 0; //计数器归0
                    peopleFlags[index] = false; //此人被淘汰
                    peopleLeft--;//未被淘汰的人数-1
                }
            }
            index++;

            //当当前人等于总人数时，则又从第一人开始计数
            if (index == total) {
                index = 0;
            }
        }
        for (int j = 0; j < total; j++) {
            if (peopleFlags[j]) {
                return j + 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        int total = 10;
        int keyNumber = 3;
        Integer winner = compute(total, keyNumber);
        System.out.println(total + "个人围成一圈数数，数到" + keyNumber + "的被淘汰，最后剩下的是第" + winner + "个人。");
    }


}

