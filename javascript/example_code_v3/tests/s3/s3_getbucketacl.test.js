process.argv.push('--arg1', 'us-west-2');
process.argv.push('--arg2', 'BUCKET_NAME');
const mockBucketAcl = jest.fn();
jest.mock('@aws-sdk/client-s3/commands/GetBucketAclCommand', () => ({
    S3: function S3() {
        this.GetBucketAclCommand = mockBucketAcl;
    }
}));
const {bucketParams, run} = require("../../s3/s3_getbucketacl");

//test function
test("has to mock S3#getBucketAcl",  async (done) => {
    await run();
    expect(mockBucketAcl).toHaveBeenCalled;
    done();
});

